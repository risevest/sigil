import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M15 11.5a1 1 0 1 0 2 0V9h1.793c1.336 0 2.005-1.616 1.06-2.56L15.06 1.644a1.5 1.5 0 0 0-2.122 0L8.147 6.44C7.2 7.384 7.87 9 9.206 9H11v7a1 1 0 0 0 1 1h1.587L10 20.586 6.414 17H8a1 1 0 0 0 1-1v-3.5a1 1 0 1 0-2 0V15H5.207c-1.336 0-2.006 1.615-1.06 2.56l4.792 4.794a1.5 1.5 0 0 0 2.122 0l4.793-4.794c.945-.945.275-2.56-1.061-2.56H13V8a1 1 0 0 0-1-1h-1.587L14 3.413 17.586 7H16a1 1 0 0 0-1 1z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'TransferVerticalLine'
/**
 * MingCute Icon: Transfer Vertical Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TransferVerticalLine = Icon
