import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm-4 9h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2zm2-7H9v2h6z" />
    </svg>
  )
})
Icon.displayName = 'DossierFill'
/**
 * Remix Icon: Dossier Fill
 * @see {@link https://remixicon.com/icon/dossier-fill Remix Icon Docs}
 */
export const DossierFill = Icon
