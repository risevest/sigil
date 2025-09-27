import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m3 8 6.003-6h10.995C20.55 2 21 2.455 21 2.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 20.993zm7-4v5H5v11h14V4z" />
    </svg>
  )
})
Icon.displayName = 'File2Line'
/**
 * Remix Icon: File 2 Line
 * @see {@link https://remixicon.com/icon/file-2-line Remix Icon Docs}
 */
export const File2Line = Icon
