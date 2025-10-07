import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <path
          fill="currentColor"
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m1 2a1 1 0 0 1 .993.883L14 7v1h.5a2.5 2.5 0 0 1 2 4 2.5 2.5 0 0 1-1.836 3.995L14.5 16H14v1a1 1 0 0 1-1.993.117L12 17v-1h-1v1a1 1 0 0 1-1.993.117L9 17v-1H8a1 1 0 0 1-.117-1.993L8 14v-4a1 1 0 0 1-.117-1.993L8 8h1V7a1 1 0 0 1 1.993-.117L11 7v1h1V7a1 1 0 0 1 1-1m1.5 7H10v1h4.5a.5.5 0 0 0 .09-.992zm0-3H10v1h4.5a.5.5 0 0 0 0-1"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'CurrencyBitcoinLine'
/**
 * MingCute Icon: Currency Bitcoin Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyBitcoinLine = Icon
