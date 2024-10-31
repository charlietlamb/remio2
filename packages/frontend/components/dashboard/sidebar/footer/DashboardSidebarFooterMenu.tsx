import { DropdownMenuContent } from '@/components/ui/dropdown-menu'
import React from 'react'
import DashboardSidebarFooterDropdown from './DashboardSidebarFooterDropdown'

export default function DashboardSidebarFooterMenu() {
  return (
    <DropdownMenuContent
      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side="bottom"
      align="end"
      sideOffset={4}
    >
      <DashboardSidebarFooterDropdown />
    </DropdownMenuContent>
  )
}
