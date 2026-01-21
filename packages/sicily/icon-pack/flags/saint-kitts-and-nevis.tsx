import { memo } from 'react'
import type { IconProps } from '../../types'
const SaintKittsAndNevis = /* @__PURE__ */ memo(function SaintKittsAndNevis(
  _props: IconProps
) {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 40 40" width="1em" height="1em" {...props}>
      <mask
        id="a"
        width={40}
        height={40}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
      >
        <path
          fill="#D80027"
          d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20"
        />
      </mask>
      <g mask="url(#a)">
        <rect width={59.5} height={42.5} x={-9.801} y={-0.6} fill="#fff" rx={21.25} />
        <mask
          id="b"
          width={60}
          height={43}
          x={-10}
          y={-1}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'luminance',
          }}
        >
          <rect width={59.5} height={42.5} x={-9.801} y={-0.6} fill="#fff" rx={21.25} />
        </mask>
        <g fillRule="evenodd" clipRule="evenodd" mask="url(#b)">
          <path fill="#1EC160" d="M-9.8 27.733 49.7-.6H-9.8z" />
          <path fill="#DF2A40" d="M-9.8 41.9h59.5V13.567z" />
          <path
            fill="#FFD956"
            d="m-8.135 53.234 69.68-43.542-13.512-21.625-69.681 43.542z"
          />
          <path
            fill="#262626"
            d="M-11.137 48.428 58.544 4.886 51.037-7.128l-69.681 43.542z"
          />
          <path
            fill="#fff"
            d="m33.356 15.97-2.009 3.182-1.303-3.53-3.648-.927 2.955-2.33-.245-3.756 3.13 2.09 3.495-1.394-1.02 3.622 2.405 2.894zM10.69 29.711l-2.009 3.182-1.304-3.53-3.647-.927 2.955-2.33-.245-3.756 3.13 2.09 3.495-1.394-1.02 3.623 2.405 2.893z"
          />
        </g>
      </g>
    </svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Saint Kitts And Nevis
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { SaintKittsAndNevis }
