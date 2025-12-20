import React from 'react';
import { useTranslation } from "../hooks/useTranslation";

function About() {
  const t = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">{t("about_title")}</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          {t("about_intro")}
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">{t("about_mission_title")}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t("about_mission_text")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{t("about_value_community_title")}</h3>
              <p className="text-gray-600">{t("about_value_community_text")}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{t("about_value_excellence_title")}</h3>
              <p className="text-gray-600">{t("about_value_excellence_text")}</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-blue-600 mb-2">{t("about_value_fun_title")}</h3>
              <p className="text-gray-600">{t("about_value_fun_text")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 bg-blue-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">{t("about_team_title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800">Jane Doe</h3>
              <p className="text-gray-600">{t("about_role_head_coach")}</p>
              <p className="text-gray-500 mt-2">{t("about_desc_head_coach")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800">John Smith</h3>
              <p className="text-gray-600">{t("about_role_program_dir")}</p>
              <p className="text-gray-500 mt-2">{t("about_desc_program_dir")}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-800">Emily Chen</h3>
              <p className="text-gray-600">{t("about_role_youth_coord")}</p>
              <p className="text-gray-500 mt-2">{t("about_desc_youth_coord")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 text-center bg-blue-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("about_cta_title")}</h2>
        <p className="text-lg mb-6">{t("about_cta_text")}</p>
        <div className="flex justify-center gap-4">
          <a href="/schedule" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100">
            {t("about_cta_schedule_btn")}
          </a>
          <a href="/contact" className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900">
            {t("about_cta_contact_btn")}
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;