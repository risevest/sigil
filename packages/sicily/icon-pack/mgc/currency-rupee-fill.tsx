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
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-1.535q.27.466.409 1H15a1 1 0 1 1 0 2h-1.126a4.01 4.01 0 0 1-2.302 2.68L13.6 16.2a1 1 0 0 1-1.2 1.6l-3.992-2.994A.99.99 0 0 1 8 14c0-.257.103-.504.27-.683A.99.99 0 0 1 9 13h1a2 2 0 0 0 1.732-1H9a1 1 0 1 1 0-2h2.732A2 2 0 0 0 10 9H9a1 1 0 0 1-1-1"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'CurrencyRupeeFill'
/**
 * MingCute Icon: Currency Rupee Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyRupeeFill = Icon
