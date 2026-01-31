import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import HomeLayout from "../layout/HomeLayout";
import { userResumes_api } from "../api/ResumeApis";

interface Resume {
  id: number;
  template: string;
  theme_color: string;
  personal_info?: {
    full_name?: string;
  };
}

const ResumeDashboard = () => {
  const navigate = useNavigate();
  const token = Cookies.get("user_token");

  const [loading, setLoading] = useState(true);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [guestResume, setGuestResume] = useState<any>(null);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        setLoading(true);

        // 🔐 Logged-in user
        if (token) {
          const res = await axios.get(userResumes_api, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (res?.data?.length > 0) {
            setResumes(res.data);
          }
        }

        // 👤 Guest user
        else {
          const localData = localStorage.getItem("guest_resume_data");
          if (localData) {
            setGuestResume(JSON.parse(localData));
          }
        }
      } catch (error) {
        console.log("Error fetching resumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleCreate = () => {
    navigate("/setup");
  };

  const handleOpenResume = (id: number) => {
    navigate(`/builder/${id}`);
  };

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <HomeLayout>
      <div className="min-h-screen p-10 bg-gray-50 relative">
        <div className="pointer-events-none z-0 absolute top-5 md:top-40 -left-32 h-40 w-40 md:h-96 md:w-96 rounded-full bg-[#FDE4C8] blur-3xl opacity-60" />
        <div className="pointer-events-none z-0 absolute -top-10 left-48 h-40 w-40  md:h-80 md:w-80 rounded-full bg-[#b29cdf] blur-[90px] opacity-50" />
        <div className="pointer-events-none z-0 absolute top-3/4 md:top-2/4 max-md:left-0 md:right-20  h-40 w-40  md:h-[420px] md:w-[420px] rounded-full bg-[#DDE6FF] blur-[64px] opacity-70" />
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Your Resumes</h1>

          {/* 🔐 Logged-in Resumes */}
          {token && resumes.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6">
              {resumes.map((resume) => (
                <div
                  key={resume.id}
                  className="p-5 bg-white shadow rounded-lg border cursor-pointer hover:shadow-md transition"
                  onClick={() => handleOpenResume(resume.id)}
                >
                  <h2 className="font-semibold text-lg">
                    {resume.personal_info?.full_name || "Untitled Resume"}
                  </h2>
                  <p className="text-sm text-gray-500 mt-2">
                    Template: {resume.template}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* 👤 Guest Resume */}
          {!token && guestResume && (
            <div
              className="p-5 bg-white shadow rounded-lg border cursor-pointer hover:shadow-md transition"
              onClick={() => navigate("/builder")}
            >
              <h2 className="font-semibold text-lg">
                {guestResume.personal_info?.full_name || "Untitled Resume"}
              </h2>
              <p className="text-sm text-gray-500 mt-2">Guest Resume</p>
            </div>
          )}

          {/* ➕ No Resume Case */}
          {((token && resumes.length === 0) || (!token && !guestResume)) && (
            <div className="flex flex-col items-center justify-center mt-16">
              <p className="text-gray-500 mb-6">
                No resumes found. Create your first resume.
              </p>
              <button
                onClick={handleCreate}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                + Create Resume
              </button>
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default ResumeDashboard;
