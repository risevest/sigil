import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <g clipPath="url(#a)">
        <path
          fill="#F0F0F0"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.955 0 20s8.954 20 20 20"
        />
        <path
          fill="#D80027"
          d="M26.496 14.783H23.88q.032.43.033.87c0 1.934-.483 3.809-1.326 5.144-.26.412-.697.993-1.282 1.385v-7.4h-2.609v7.4c-.585-.392-1.022-.973-1.282-1.385-.843-1.335-1.327-3.21-1.327-5.145q.001-.438.034-.87h-2.616q-.026.43-.027.87c0 5.364 2.865 9.565 6.522 9.565s6.522-4.201 6.522-9.565q0-.44-.026-.87"
        />
        <path
          fill="#6DA544"
          d="M8.26 9.565h2.61v1.74h2.608v-1.74h2.609v1.74h2.608v-1.74h2.61v1.74h2.608v-1.74h2.608v1.74h2.61v-1.74h2.608v1.74h6.276C34.78 4.614 27.93 0 20 0S5.22 4.614 1.984 11.304h6.277z"
        />
        <path
          fill="#D80027"
          d="M31.739 28.696v1.739H29.13v-1.74h-2.608v1.74h-2.609v-1.74h-2.609v1.74h-2.608v-1.74h-2.609v1.74h-2.609v-1.74H10.87v1.74H8.261v-1.74H1.984C5.22 35.386 12.071 40 20 40c7.93 0 14.78-4.614 18.015-11.304z"
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
Icon.displayName = 'Iran'
/**
 * Flags by `Deji.Zeal`: Iran
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Iran = Icon
