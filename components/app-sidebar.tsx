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
            <a href='/'>
                <img src={logo.src} alt="Logo" width={192} height={400} className="absolute pl-4"/>
            </a>
      </SidebarHeader>
      <SidebarContent className="pt-20">
        <SidebarGroup>
            <SidebarGroupLabel>Personal</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <a href='/about'>
                                About
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
                        <SidebarMenuButton>
                            <a href='#'>
                                Other
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter /> */}
    </Sidebar>
  )
}