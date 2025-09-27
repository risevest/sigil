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
          d="M5 5a2 2 0 0 1 2-2h4.5a4.5 4.5 0 1 1 0 9h-.086L15 15.586l2.293-2.293a1 1 0 0 1 1.414 1.414L16.414 17l2.293 2.293a1 1 0 0 1-1.414 1.414L15 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L13.586 17l-5-5H7v5a1 1 0 1 1-2 0zm2 5h4.5a2.5 2.5 0 0 0 0-5H7z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'PrescriptionLine'
/**
 * MingCute Icon: Prescription Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const PrescriptionLine = Icon
