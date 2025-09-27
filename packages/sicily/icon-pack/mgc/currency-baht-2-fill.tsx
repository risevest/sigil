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
          d="M12 2.5A1.5 1.5 0 0 1 13.5 4v.5h.5a4.5 4.5 0 0 1 3.354 7.5A4.5 4.5 0 0 1 14 19.5h-.5v.5a1.5 1.5 0 0 1-3 0v-.5H8.1a1.6 1.6 0 0 1-1.6-1.6V6.1a1.6 1.6 0 0 1 1.6-1.6h2.4V4A1.5 1.5 0 0 1 12 2.5m-2.5 11v3H14a1.5 1.5 0 0 0 0-3zm0-3H14a1.5 1.5 0 0 0 0-3H9.5z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'CurrencyBaht2Fill'
/**
 * MingCute Icon: Currency Baht 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyBaht2Fill = Icon
