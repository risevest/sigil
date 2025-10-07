import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 32 23" width="1em" height="1em" {...props}>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28 1.985h-3.654l-1.91 5.435-1.993-5.435h-3.737v8.463l-3.82-8.463H9.813l-3.82 8.647H8.65l.748-1.73h3.986l.748 1.73h4.982V4.62l2.242 6.012h2.076l2.243-6.012v6.012H28v1.317h-3.073l-2.491 2.718-2.574-2.718H9.315v8.647h10.464l2.574-2.8 2.574 2.8H28v1.07h-3.654l-1.993-2.14-1.993 2.14H7.986v-9.881H4L8.983.667h4.816l1.744 3.788V.667h5.98l.996 2.882.997-2.882H28zm0 11.858-2.242 2.389L28 18.62v1.976l-4.07-4.364L28 11.949zm-11.294 6.753v-2.058h-4.983V17.22h4.9v-1.977h-4.9v-1.317h4.983v-1.977l4.152 4.283zm-6.56-13.588 1.162-2.8 1.163 2.8z"
        clipRule="evenodd"
      />
    </svg>
  )
})
Icon.displayName = 'AmexLogoDark'
export const AmexLogoDark = Icon
