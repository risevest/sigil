import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m20.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M20 11a6 6 0 0 0 2-.341v9.348a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h11.35A6 6 0 0 0 20 11M4 5v2h2V5zm0 4v2h2V9zm0 4v2h2v-2zm14 0v2h2v-2zM4 17v2h2v-2zm14 0v2h2v-2z" />
    </svg>
  )
})
Icon.displayName = 'FilmAiFill'
/**
 * Remix Icon: Film Ai Fill
 * @see {@link https://remixicon.com/icon/film-ai-fill Remix Icon Docs}
 */
export const FilmAiFill = Icon
