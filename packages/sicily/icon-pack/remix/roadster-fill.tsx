import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5h1.875l2.138-5.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L21.625 11H23.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.758.97zM4 15v2a1 1 0 0 0 1 1h3.245a.5.5 0 0 0 .44-.736Q7.476 15 4 15m16 0q-3.476 0-4.686 2.264a.5.5 0 0 0 .441.736H19a1 1 0 0 0 1-1zM6 6l-1.561 4.684A1 1 0 0 0 5.387 12h13.226a1 1 0 0 0 .948-1.316L18 6z" />
    </svg>
  )
})
Icon.displayName = 'RoadsterFill'
/**
 * Remix Icon: Roadster Fill
 * @see {@link https://remixicon.com/icon/roadster-fill Remix Icon Docs}
 */
export const RoadsterFill = Icon
