import type { FC, ReactNode } from 'react'

type DashboardCardProps = {
  title: string
  icon: ReactNode
  headerColor: string
  children: ReactNode
}

export const DashboardCard: FC<DashboardCardProps> = ({
  title,
  icon,
  headerColor,
  children,
}) => (
  <div className="flex flex-col border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div
      className={`flex items-center gap-2 border-b-4 border-black ${headerColor} px-4 py-3 flex-shrink-0`}
    >
      {icon}
      <h3 className="text-base font-black uppercase tracking-wide text-white">
        {title}
      </h3>
    </div>
    <div className="bg-zinc-50 p-4">{children}</div>
  </div>
)
