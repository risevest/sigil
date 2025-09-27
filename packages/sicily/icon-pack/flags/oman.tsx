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
          fill="#D80027"
          d="M0 20c0 7.58 4.218 14.176 10.435 17.568V2.432C4.218 5.824 0 12.419 0 20"
        />
        <path
          fill="#D80027"
          d="M38.756 26.957A20 20 0 0 0 40 20c0-2.446-.44-4.79-1.244-6.956H1.244A20 20 0 0 0 0 20c0 2.447.44 4.79 1.244 6.957L20 28.696z"
        />
        <path
          fill="#6DA544"
          d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40"
        />
        <path
          fill="#D80027"
          d="M0 20c0 9.24 6.267 17.016 14.783 19.311V.689C6.267 2.984 0 10.759 0 20"
        />
        <path
          fill="#F0F0F0"
          d="M12.236 8.801 10.39 6.957l-1.23 1.23-1.23-1.23L6.088 8.8l1.23 1.23-1.23 1.23 1.845 1.844 1.23-1.23 1.23 1.23 1.844-1.844-1.23-1.23z"
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
Icon.displayName = 'Oman'
/**
 * Flags by `Deji.Zeal`: Oman
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Oman = Icon
