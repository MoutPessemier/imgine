"use client";

import { useState } from "react";

import { Icon } from "@/components/icon";
import { Select } from "@/components/select";

import styles from "./time-selector.module.css";

type TimeSelectorProps = {
  totalDocs: number;
};

export const TimeSelector = ({ totalDocs }: TimeSelectorProps) => {
  const [selectedTime, setSelectedTime] = useState("week");
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = (value: string) => selectedTime === value;

  return (
    <div className={styles["time-container"]}>
      <div>
        <p className={styles["time-indicator"]}>Tips of the {selectedTime}</p>
        <p className={styles["doc-amount"]}>{totalDocs} total</p>
      </div>
      <Select.Root
        value={selectedTime}
        onValueChange={setSelectedTime}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Select.Trigger>
          <Select.Value placeholder="Week" />
          <Select.Icon>
            <Icon
              name={isOpen ? "chevron-up" : "chevron-down"}
              width={16}
              height={16}
              color="#fff"
            />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport>
              <Select.Item selected={isSelected("day")} value="day">
                Day
              </Select.Item>
              <Select.Item selected={isSelected("week")} value="week">
                Week
              </Select.Item>
              <Select.Item selected={isSelected("month")} value="month">
                Month
              </Select.Item>
              <Select.Item selected={isSelected("year")} value="year">
                Year
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
