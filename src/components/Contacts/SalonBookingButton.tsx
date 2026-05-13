"use client";

import { type ButtonHTMLAttributes, useEffect, useId, useRef, useState } from "react";
import classNames from "classnames";

import Modal from "../Shared/Modal";
import { contactLeadModal } from "../../content/contacts";
import { useSubmitContactLead } from "../../services/contact/useSubmitContactLead";

type SalonBookingButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "onClick" | "type">;

export default function SalonBookingButton({
  className,
  children,
  disabled,
  ...rest
}: SalonBookingButtonProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [comment, setComment] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const setPhone = (value: string) => {
    setPhoneNumber(value);
  }

  const idBase = useId();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const { mutate, reset, isPending, isSuccess, isError, error } =
    useSubmitContactLead();

  useEffect(() => {
    if (!open) return;
    setName("");
    setPhone("+375");
    setComment("");
    setHoneypot("");
    reset();
  }, [open, reset]);

  useEffect(() => {
    if (!open || isSuccess) return;
    const id = requestAnimationFrame(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(id);
  }, [open, isSuccess]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      name,
      phone,
      comment,
      website: honeypot,
    });
  };

  return (
    <>
      <button
        {...rest}
        type="button"
        className={className}
        disabled={disabled}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {open && (
        <Modal
          variant="surface"
          title={isSuccess ? contactLeadModal.successTitle : contactLeadModal.title}
          isCloseOutside={!isPending}
          onClose={() => {
            if (isPending) return;
            setOpen(false);
          }}
          content={
            <div className="space-y-6">
              {isSuccess ? (
                <div className="space-y-4 text-center">
                  <p className="text-sm leading-relaxed text-slate-400">
                    {contactLeadModal.successMessage}
                  </p>
                  <button
                    type="button"
                    className="home-btn-accent mt-2 w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    {contactLeadModal.close}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative space-y-4 text-left"
                >
                  <p className="text-sm leading-relaxed text-slate-400">
                    {contactLeadModal.lead}
                  </p>

                  <input
                    aria-hidden
                    autoComplete="off"
                    className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
                    name="website"
                    tabIndex={-1}
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />

                  <div className="space-y-2">
                    <label
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                      htmlFor={`${idBase}-name`}
                    >
                      {contactLeadModal.fields.name}
                    </label>
                    <input
                      ref={nameInputRef}
                      id={`${idBase}-name`}
                      required
                      maxLength={120}
                      autoComplete="name"
                      className={inputClassName}
                      placeholder={contactLeadModal.placeholders.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                      htmlFor={`${idBase}-phone`}
                    >
                      {contactLeadModal.fields.phone}
                    </label>
                    <input
                      id={`${idBase}-phone`}
                      required
                      maxLength={13}
                      autoComplete="tel"
                      inputMode="tel"
                      className={inputClassName}
                      placeholder={contactLeadModal.placeholders.phone}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                      htmlFor={`${idBase}-comment`}
                    >
                      {contactLeadModal.fields.comment}
                    </label>
                    <textarea
                      id={`${idBase}-comment`}
                      rows={4}
                      maxLength={2000}
                      className={classNames(inputClassName, "min-h-[100px] resize-y")}
                      placeholder={contactLeadModal.placeholders.comment}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  {isError && (
                    <p
                      className="rounded-md border border-red-500/35 bg-red-950/40 px-3 py-2 text-sm text-red-200"
                      role="alert"
                    >
                      <span className="font-medium text-red-100">
                        {contactLeadModal.errorPrefix}
                      </span>{" "}
                      {error instanceof Error
                        ? error.message
                        : contactLeadModal.tryLater}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className={classNames(
                      "home-btn-accent w-full justify-center",
                      isPending && "pointer-events-none opacity-70",
                    )}
                  >
                    {isPending
                      ? contactLeadModal.submitting
                      : contactLeadModal.submit}
                  </button>
                </form>
              )}
            </div>
          }
        />
      )}
    </>
  );
}

const inputClassName =
  "w-full rounded-md border border-white/15 bg-surface-muted/80 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-accent/60 focus:ring-1 focus:ring-accent/40";
