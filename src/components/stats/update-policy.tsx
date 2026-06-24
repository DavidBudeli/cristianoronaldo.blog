type UpdatePolicyProps = {
  copy: string;
};

export function UpdatePolicy({ copy }: UpdatePolicyProps) {
  return (
    <aside className="border-t border-white/10 px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="max-w-3xl pt-8 text-xs leading-6 text-muted">
          {copy}
        </p>
      </div>
    </aside>
  );
}
