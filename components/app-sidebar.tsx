import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroupLabel,
    SidebarMenu
} from "@/components/ui/sidebar"

import logo from "@/public/drawing.svg"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="min-h-7 block pt-6 pb-4">
            <a className="before:block before:absolute before:-inset-3 before:-skew-y-3 before:bg-pink-500 relative inline-block" href='/'>
                <div className="relative text-white text-3xl hover:text-slate-700">Carson Fischl</div>
            </a>
      </SidebarHeader>
      <SidebarContent className="pt-20 text-4xl text-center align-middle font-bold">
        <SidebarGroup>
            <SidebarGroupLabel>Personal</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <a href='/about'>
                                About Me
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <a href='/projects'>
                                Projects
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <a href='/hobbies'>
                                Hobbies
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
            <SidebarGroupLabel>Professional</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <a href='/education'>
                                Education
                            </a>
                        </SidebarMenuButton>
                        <SidebarMenuButton>
                            <a href='/experience'>
                                Experience
                            </a>
                        </SidebarMenuButton>
                        {/* <SidebarMenuButton>
                            <a href='#'>
                                Other
                            </a>
                        </SidebarMenuButton> */}
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  )
}