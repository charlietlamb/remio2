import DashboardHeader from '@/components/dashboard/header/DashboardHeader'
import DashboardSidebar from '@/components/dashboard/sidebar/DashboardSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import useAuth from '@/hooks/use-auth'
import useIsUser from '@/hooks/use-is-user'

export default async function layout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await useAuth()
  useIsUser(user)
  return (
    <SidebarProvider className="flex w-full flex-grow">
      <DashboardSidebar />
      <div className="w-full">
        <DashboardHeader />
        <div className="p-4 flex flex-col">{children}</div>
      </div>
    </SidebarProvider>
  )
}
