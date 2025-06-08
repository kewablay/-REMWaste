"use client";

import React, { useState } from "react";
import SkipCard from "../SkipCard";
import { SkipType } from "@/types/skip.types";
import { useGetSkipsQuery } from "../../_hooks/useGetSkipsQuery";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useForm } from "react-hook-form";
import FormNavigationPopup from "../FormNavigationPopup";

export default function SkipHireList() {
  const {
    data: skips,
    isPending: skipsLoading,
    isError: skipsError,
  } = useGetSkipsQuery();

  const { watch, setValue } = useForm();
  const selectedSkip = watch("selectedSkip");
  const [skip, setSkip] = useState<SkipType | null>(null);

  const handleSkipSelect = (skip: SkipType) => {
    // check if the skip is already selected
    if (skip?.id === selectedSkip) {
      setValue("selectedSkip", null);  // deselect skip
      setSkip(null); // update skip state
      return;
    }

    setValue("selectedSkip", skip?.id); // set the value of the form
    setSkip(skip); // update skip state
  };

  return (
    <>
      {/* skips loading */}
      {skipsLoading && (
        <div className="flex items-center justify-center h-[50vh]">
          <LoadingSpinner size="lg" className="mx-auto text-orange-500" />
        </div>
      )}

      {/* skips loaded successfully */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skips &&
          skips.map((skip: SkipType) => (
            <SkipCard
              key={skip.id}
              {...skip}
              isSelected={selectedSkip === skip.id}
              onSelect={handleSkipSelect}
            />
          ))}
      </div>

      {/* skips loading error */}
      {skipsError && <p>Error loading skips</p>}

      {/* bottom popup with selected skip and action buttons */}
      {skip && <FormNavigationPopup isOpen={!!skip} {...skip} />}
    </>
  );
}
