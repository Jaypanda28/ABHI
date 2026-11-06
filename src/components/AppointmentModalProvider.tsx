"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import AppointmentModal from "./AppointmentModal";

interface AppointmentModalContextType {
  isOpen: boolean;
  openModal: (defaultHospital?: string) => void;
  closeModal: () => void;
  selectedHospital: string;
}

const AppointmentModalContext = createContext<AppointmentModalContextType | undefined>(undefined);

export function useAppointmentModal() {
  const context = useContext(AppointmentModalContext);
  if (!context) {
    throw new Error("useAppointmentModal must be used within an AppointmentModalProvider");
  }
  return context;
}

export default function AppointmentModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState("");

  const openModal = (defaultHospital?: string) => {
    if (defaultHospital) {
      setSelectedHospital(defaultHospital);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentModalContext.Provider value={{ isOpen, openModal, closeModal, selectedHospital }}>
      {children}
      <AppointmentModal isOpen={isOpen} onClose={closeModal} defaultHospital={selectedHospital} />
    </AppointmentModalContext.Provider>
  );
}

