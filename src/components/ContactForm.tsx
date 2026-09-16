"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const PROJECT_TYPES = ["Branding & Identity", "Art Direction & Campaign", "UX/UI Design", "Graphic Design & Print", "Other"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`New project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm uppercase tracking-wider text-ink/60">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-amber focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm uppercase tracking-wider text-ink/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-amber focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="text-sm uppercase tracking-wider text-ink/60">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-amber focus:outline-none"
          defaultValue={PROJECT_TYPES[0]}
        >
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm uppercase tracking-wider text-ink/60">
          Tell me about the project
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 focus:border-amber focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-ink px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-bone hover:bg-ink-soft"
      >
        Send enquiry
      </button>

      <p className="text-sm text-ink/60" aria-live="polite">
        {sent
          ? `Your email client should have opened with this enquiry addressed to ${site.email}. If it didn't, email directly at ${site.email}.`
          : `This opens your email client with the message pre-filled — nothing is sent until you hit send there.`}
      </p>
    </form>
  );
}
