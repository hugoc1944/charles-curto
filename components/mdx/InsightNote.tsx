export function InsightNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-16 px-8 py-6 border-l-2 border-[#C7A36A] bg-[#F2F1EC]">
      <div className="font-body text-[18px] leading-[1.7] text-[#1F2E5A]">
        {children}
      </div>
    </div>
  );
}