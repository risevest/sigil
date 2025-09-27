import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
        <path
          fill="#F0F0F0"
          d="M4.571 7.273h30.857A20.1 20.1 0 0 0 31.5 3.636h-23A20 20 0 0 0 4.57 7.273M0 20q.002.92.083 1.818h39.834Q39.999 20.92 40 20q-.002-.92-.083-1.818H.083A20 20 0 0 0 0 20M2.18 29.09H37.82a20 20 0 0 0 1.428-3.635H.753A20 20 0 0 0 2.18 29.09M8.5 36.364h23a20 20 0 0 0 3.928-3.637H4.571A20.1 20.1 0 0 0 8.5 36.364M.753 14.546h38.494a20 20 0 0 0-1.428-3.637H2.18a20 20 0 0 0-1.428 3.637"
        />
        <path
          fill="#D80027"
          d="M9.565 3.636h21.936A19.9 19.9 0 0 0 20 0c-2.61 0-7.182 1.346-10.436 3.636M19.13 10.91h18.689a20 20 0 0 0-2.391-3.637H19.13zM19.13 18.182h20.786a20 20 0 0 0-.67-3.636H19.13zM.753 25.455h38.494c.331-1.172.557-2.388.67-3.637H.083c.113 1.249.339 2.465.67 3.637M4.571 32.727h30.857a20 20 0 0 0 2.39-3.636H2.182a20 20 0 0 0 2.39 3.636M20 40c4.28 0 8.247-1.346 11.5-3.636H8.5A19.9 19.9 0 0 0 19.999 40"
        />
        <path
          fill="#0052B4"
          d="M.753 14.546a20 20 0 0 0-.67 3.636H20V0C10.845 0 3.127 6.15.753 14.546"
        />
        <path
          fill="#F0F0F0"
          d="M11.905 5.218 13.2 9.203h4.19L14 11.667l1.295 3.985-3.39-2.463-3.39 2.463 1.294-3.985-3.39-2.464h4.19z"
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
Icon.displayName = 'Liberia'
/**
 * Flags by `Deji.Zeal`: Liberia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Liberia = Icon
