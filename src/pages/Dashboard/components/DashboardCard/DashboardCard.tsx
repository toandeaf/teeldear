import { useState, useRef, type FC, type ReactNode } from 'react'
import { X, Maximize2 } from 'lucide-react'
import { createPortal } from 'react-dom'

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
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [startRect, setStartRect] = useState<DOMRect | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleExpand = () => {
    if (cardRef.current) {
      setStartRect(cardRef.current.getBoundingClientRect())
      setIsAnimating(true)
      requestAnimationFrame(() => {
        setIsExpanded(true)
      })
    }
  }

  const handleCollapse = () => {
    setIsExpanded(false)
    setTimeout(() => {
      setIsAnimating(false)
      setStartRect(null)
    }, 300)
  }

  return (
    <>
      {/* Regular Card */}
      <div
        ref={cardRef}
        className={`flex flex-col h-full border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
          isAnimating ? 'invisible' : ''
        }`}
      >
        <button
          onClick={handleExpand}
          className={`flex items-center justify-between border-b-4 border-black ${headerColor} px-4 py-3 flex-shrink-0 cursor-pointer transition-all hover:brightness-110`}
        >
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="text-base font-black uppercase tracking-wide text-white">
              {title}
            </h3>
          </div>
          <Maximize2 size={16} className="text-white/70" strokeWidth={2.5} />
        </button>
        <div className="bg-zinc-50 p-4 flex-1 overflow-y-auto">{children}</div>
      </div>

      {/* Animated Modal */}
      {isAnimating &&
        startRect &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 transition-colors duration-300 ${
              isExpanded ? 'bg-black/60' : 'bg-transparent'
            }`}
            onClick={handleCollapse}
          >
            <div
              className="fixed border-4 border-black bg-white transition-all duration-300 ease-out flex flex-col"
              style={
                isExpanded
                  ? {
                      top: '5vh',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 'min(90vw, 56rem)',
                      height: '90vh',
                      boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)',
                    }
                  : {
                      top: startRect.top,
                      left: startRect.left,
                      width: startRect.width,
                      height: startRect.height,
                      boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                    }
              }
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`flex items-center justify-between border-b-4 border-black ${headerColor} px-4 py-3 flex-shrink-0 transition-all duration-300 ${
                  isExpanded ? 'px-6 py-4' : ''
                }`}
              >
                <div className="flex items-center gap-2">
                  {icon}
                  <h3
                    className={`font-black uppercase tracking-wide text-white transition-all duration-300 ${
                      isExpanded ? 'text-xl' : 'text-base'
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <button
                  onClick={handleCollapse}
                  className={`flex items-center justify-center border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
                    isExpanded
                      ? 'h-8 w-8 opacity-100'
                      : 'h-6 w-6 opacity-0 pointer-events-none'
                  }`}
                >
                  <X size={18} strokeWidth={3} />
                </button>
              </div>
              <div
                className={`bg-zinc-50 flex-1 overflow-y-auto transition-all duration-300 ${
                  isExpanded ? 'p-6' : 'p-4'
                }`}
              >
                {children}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
