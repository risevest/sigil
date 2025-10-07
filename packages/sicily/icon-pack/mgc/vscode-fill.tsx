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
          d="M5.633 17.774a1 1 0 0 1-1.188.058l-1.5-1a1 1 0 0 1-.166-1.525L5.96 12 2.78 8.693a1 1 0 0 1 .166-1.525l1.5-1a1 1 0 0 1 1.188.058l3.29 2.692 6.35-6.604A1.02 1.02 0 0 1 15.999 2H16a1 1 0 0 1 .6.2l4 3a1 1 0 0 1 .4.8v12a1 1 0 0 1-.4.8l-4 3a1 1 0 0 1-1.328-.114l-6.35-6.603zM15 13.89v-3.78L12.69 12z"
        />
      </g>
    </svg>
  )
})
Icon.displayName = 'VscodeFill'
/**
 * MingCute Icon: Vscode Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const VscodeFill = Icon
