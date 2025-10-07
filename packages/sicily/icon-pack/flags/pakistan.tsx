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
          d="M0 20c0 7.58 4.218 14.176 10.435 17.568V2.432C4.218 5.824 0 12.419 0 20"
        />
        <path
          fill="#496E2D"
          d="M20 0a19.9 19.9 0 0 0-9.565 2.432v35.136A19.9 19.9 0 0 0 20 40c11.045 0 20-8.954 20-20S31.045 0 20 0"
        />
        <path
          fill="#F0F0F0"
          d="M28.55 23.308a5.652 5.652 0 1 1-4.043-10.187 6.957 6.957 0 1 0 5.825 8.062 5.6 5.6 0 0 1-1.781 2.125M28.442 13.044l1.425 1.536 1.902-.88-1.02 1.83 1.424 1.535-2.056-.405-1.02 1.83-.25-2.08-2.056-.405 1.901-.88z"
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
Icon.displayName = 'Pakistan'
/**
 * Flags by `Deji.Zeal`: Pakistan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Pakistan = Icon
