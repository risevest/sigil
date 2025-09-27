import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m5.735 2 5.695 5.247V2.012h1.109v5.259L18.259 2v5.983h2.349v8.629h-2.342v5.327l-5.727-5.032v5.09h-1.11V16.99L5.742 22v-5.388H3.393v-8.63h2.342zm4.86 7.078H4.5v6.439H5.74v-2.031zM6.85 13.972v5.585l4.58-4.034V9.81zm5.72 1.497 4.588 4.03v-2.887h-.006v-2.646l-4.582-4.16zm5.696.048H19.5v-6.44h-6.047l4.814 4.363zm-1.115-7.534V4.519l-3.76 3.464zm-6.548 0-3.76-3.464v3.464z" />
    </svg>
  )
})
Icon.displayName = 'PerplexityFill'
/**
 * Remix Icon: Perplexity Fill
 * @see {@link https://remixicon.com/icon/perplexity-fill Remix Icon Docs}
 */
export const PerplexityFill = Icon
