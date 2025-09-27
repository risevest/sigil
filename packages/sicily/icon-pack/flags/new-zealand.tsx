import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#0052B4"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20C0 20.005 20 .002 20 0c11.046 0 20 8.954 20 20"
        />
        <path
          fill="#F0F0F0"
          d="M19.946 20H20v-.053zM20 10.435V0h-.003C8.953.002 0 8.955 0 20h10.435v-5.876L16.31 20h3.636l.053-.053V16.31l-5.876-5.876z"
        />
        <path
          fill="#D80027"
          d="M10.118 2.609a20.1 20.1 0 0 0-7.51 7.51V20h5.218V7.826H20V2.61z"
        />
        <path
          fill="#D80027"
          d="m20 17.54-7.106-7.105h-2.46L20 20zM34.634 14.84l.432 1.329h1.397l-1.13.821.432 1.329-1.13-.821-1.13.82.43-1.328-1.13-.821h1.398zM29.641 24.406l.648 1.993h2.095L30.69 27.63l.648 1.993-1.696-1.232-1.695 1.232.648-1.993-1.696-1.231h2.096zM29.83 8.754l.54 1.66h1.745l-1.412 1.027.54 1.66-1.413-1.026-1.413 1.026.54-1.66-1.413-1.027h1.746zM25.025 14.783l.648 1.992h2.095l-1.695 1.232L26.72 20l-1.696-1.232L23.33 20l.648-1.993-1.696-1.232h2.096z"
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
Icon.displayName = 'NewZealand'
/**
 * Flags by `Deji.Zeal`: New Zealand
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const NewZealand = Icon
