import { AuthContext } from "@/hooks/use-auth-context";
import { supabase } from "@/utils/supabase";
import { PropsWithChildren, useEffect, useState } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<
    Record<string, any> | undefined | null
  >();
  const [profile, setProfile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Fetch the claims once, and subscribe to auth state changes
  useEffect(() => {
    const fetchClaims = async () => {
      setIsLoading(true);

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error fetching claims:", error);
      }

      setSession(session);
      setIsLoading(false);
    };

    fetchClaims();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, _session) => {
      //console.log("Auth state changed:", { event: _event });

      setSession(_session);
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Fetch the profile when the claims change
  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);

      if (session) {
        const { data } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single();

        setProfile(data);
      } else {
        setProfile(null);
      }

      setIsLoading(false);
    };

    fetchProfile();
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
        profile,
        isLoggedIn: session != undefined,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
