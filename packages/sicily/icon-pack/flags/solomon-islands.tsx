import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#496E2D"
          d="M34.143 34.143c7.5-7.501 7.797-19.476.892-27.333L20 20 6.81 35.034c7.857 6.906 19.832 6.61 27.333-.891"
        />
        <path
          fill="#0052B4"
          d="M5.857 5.858c7.501-7.501 19.477-7.797 27.333-.892L20 20 4.966 33.19c-6.906-7.856-6.61-19.832.891-27.332"
        />
        <path
          fill="#FFDA44"
          d="M33.189 4.966 4.965 33.19q.427.487.891.953.466.464.954.892L35.033 6.81a20 20 0 0 0-.891-.954q-.466-.464-.953-.891"
        />
        <path
          fill="#F0F0F0"
          d="m8.426 6.956.432 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.43-1.328-1.13-.821h1.398zM15.563 6.956l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.821.432-1.328-1.13-.821h1.396zM8.426 13.913l.432 1.329h1.397l-1.13.82.432 1.33-1.13-.822-1.13.821.43-1.328-1.13-.821h1.398zM15.563 13.913l.432 1.329h1.397l-1.13.82.431 1.33-1.13-.822-1.13.821.432-1.328-1.13-.821h1.396zM11.995 10.434l.432 1.329h1.396l-1.13.821.432 1.329-1.13-.821-1.13.82.431-1.328-1.13-.821h1.397z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  )
})
Icon.displayName = 'SolomonIslands'
/**
 * Flags by `Deji.Zeal`: Solomon Islands
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SolomonIslands = Icon
