import { memo } from 'react'
import type { IconProps } from '../../types'
const TaskLine = /* @__PURE__ */ memo(function TaskLine(_props: IconProps) {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 4H5v16h14zM3 2.992C3 2.444 3.447 2 3.999 2h16a1 1 0 0 1 1 1L21 20.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm8.293 10.13 4.243-4.243 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414z" />
    </svg>
  )
})
/**
 * Remix Icon: Task Line
 * @see {@link https://remixicon.com/icon/task-line Remix Icon Docs}
 */
export { TaskLine }
