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
          d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-5 8.662V13a1 1 0 1 0-2 0v8c0 .182.049.352.133.5-.985.324-2.039.5-3.133.5a10 10 0 0 1-3.133-.5A1 1 0 0 0 9 21v-8a1 1 0 1 0-2 0v7.662A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2m-2 6H7a1 1 0 0 0-.117 1.993L7 10h3a1 1 0 0 0 .117-1.993zm7 0h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'SobFill'
/**
 * MingCute Icon: Sob Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SobFill = Icon
