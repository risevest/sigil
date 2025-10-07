import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M20 2a1 1 0 0 1 .993.883L21 3v3a1 1 0 0 1-.883.993L20 7h-1v7h1a1 1 0 0 1 .117 1.993L20 16h-7v1.208a2.5 2.5 0 1 1-2.153.073l.153-.073V16H4a1 1 0 0 1-.117-1.993L4 14h1V7H4a1 1 0 0 1-.993-.883L3 6V3a1 1 0 0 1 .883-.993L4 2zm-8 17a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m7-15H5v1h14z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'ProjectorScreenFill'
/**
 * MingCute Icon: Projector Screen Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ProjectorScreenFill = Icon
