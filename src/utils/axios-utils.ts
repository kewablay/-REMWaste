import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "sonner";

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
  success?: boolean;
}

interface ErrorResponse {
  message: string;
}

// Customized request config with added showToast option
export interface ApiRequestConfig extends AxiosRequestConfig {
  showToast?: boolean;
}

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Type-safe API request function to be used in services
export async function apiRequest<T>(config: ApiRequestConfig): Promise<T> {

  // Set default showToast value to true
  const defaultConfig: ApiRequestConfig = {
    ...config,
    showToast: config.showToast ?? true,
  };



  const onSuccess = (response: AxiosResponse<T, T>) => {
    return response.data;
  };

  const onError = (error: AxiosError<ApiResponse<ErrorResponse>>) => {
    const config = error.config as ApiRequestConfig;
    const response = error.response?.data;
    // console.log("Error response from API: ", error);

    // Show toast notification if enabled
    if (config?.showToast && response?.message) {
      toast.error(response.message);
    }


    // handle network errors
    if (error?.code === "ERR_NETWORK") {
      toast.error("Network error. Please check your connection.");
    }

    throw error;
  };

  return apiClient(defaultConfig).then(onSuccess).catch(onError);
}

export default apiClient;
