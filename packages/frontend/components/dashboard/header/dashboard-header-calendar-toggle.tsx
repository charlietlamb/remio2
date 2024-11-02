'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import ScheduleSidebarToggle from '../schedule/sidebar/schedule-sidebar-toggle'
import useSchedule from '@/hooks/use-schedule'

export default function DashboardHeaderCalendarToggle() {
  const mobile = useIsMobile()
  const isSchedule = useSchedule()
  if (mobile && isSchedule) return <ScheduleSidebarToggle />
  return null
}
