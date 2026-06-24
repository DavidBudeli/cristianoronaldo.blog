export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`border border-white/10 bg-card px-4 py-3 text-warm outline-none focus:border-brand-orange ${props.className ?? ""}`} />;
}
