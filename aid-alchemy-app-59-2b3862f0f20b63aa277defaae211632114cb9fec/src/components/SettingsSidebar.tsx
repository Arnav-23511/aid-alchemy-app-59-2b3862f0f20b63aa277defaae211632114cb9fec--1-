import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  X, 
  Monitor, 
  Moon, 
  Sun, 
  Globe, 
  User, 
  LogOut, 
  Camera,
  Palette,
  Type,
  Zap
} from "lucide-react";

interface SettingsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsSidebar = ({ isOpen, onClose }: SettingsSidebarProps) => {
  const [activeTab, setActiveTab] = useState("display");
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("english");
  const [profile, setProfile] = useState({
    name: "John Doe",
    bio: "Looking for reliable caretakers for my properties.",
    avatar: ""
  });

  const tabs = [
    { id: "display", label: "Display", icon: Monitor },
    { id: "language", label: "Language", icon: Globe },
    { id: "profile", label: "Profile", icon: User },
  ];

  const languages = [
    { value: "english", label: "English", native: "English" },
    { value: "hindi", label: "Hindi", native: "हिंदी" },
    { value: "malayalam", label: "Malayalam", native: "മലയാളം" },
    { value: "kannada", label: "Kannada", native: "ಕನ್ನಡ" },
    { value: "tamil", label: "Tamil", native: "தமிழ்" },
    { value: "marathi", label: "Marathi", native: "मराठी" },
    { value: "bengali", label: "Bengali", native: "বাংলা" },
  ];

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleProfileUpdate = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden" 
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full md:w-96 bg-card border-l shadow-2xl z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold">Settings</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Display Settings */}
            {activeTab === "display" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Theme
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sun className="h-4 w-4" />
                        <span>Light Mode</span>
                      </div>
                      <Switch 
                        checked={theme === "light"} 
                        onCheckedChange={() => handleThemeChange("light")}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Moon className="h-4 w-4" />
                        <span>Dark Mode</span>
                      </div>
                      <Switch 
                        checked={theme === "dark"} 
                        onCheckedChange={() => handleThemeChange("dark")}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Type className="h-5 w-5" />
                    Display Options
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Large Text</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>High Contrast</span>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Reduce Motion</span>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Performance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Animations</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Auto-refresh</span>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Language Settings */}
            {activeTab === "language" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Select Language</h3>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          <div className="flex items-center justify-between w-full">
                            <span>{lang.label}</span>
                            <span className="text-muted-foreground ml-4">{lang.native}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h4 className="font-medium">Language Features</h4>
                  <div className="flex items-center justify-between">
                    <span>Auto-detect language</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Translate conversations</span>
                    <Switch />
                  </div>
                </div>
              </div>
            )}

            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback className="text-lg">
                        {profile.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => handleProfileUpdate("name", e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio (15-45 characters)</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value.length <= 45) {
                          handleProfileUpdate("bio", value);
                        }
                      }}
                      placeholder="Write a short bio about yourself"
                      className="resize-none"
                      maxLength={45}
                    />
                    <div className="text-xs text-muted-foreground mt-1">
                      {profile.bio.length}/45 characters
                    </div>
                  </div>

                  <Button className="w-full" variant="professional">
                    Save Profile
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t">
            <Button
              variant="destructive"
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSidebar;