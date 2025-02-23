import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Welcome to React and react-i18next",
          index: {
            aboutus: {
              title: "Short Story About MediDove Clinic.",
              showcase: "About Us",
              author: "Rosalina D. Williamson",
              founder: "Founder",
            },
            departments: {
              title: "Departments",
              subtitle: "Managed Your Heathcare Services",
            },
            getConsultant: {
              title: "Stay healthy & strong to enjoy life",
              subtitle:
                "Trust Us To Be There To Help All & Make Things Well Again.",
              button: "Get Consultant",
            },
            news: {
              title: "News",
              subtitle: "Get Every Single Update Here.",
              button: "Our Blog",
              calendar: "23 Feb 2024",
              comments: "33 Comments",
            },
            ourteam: {
              title: "Our Team",
              subtitle: "A Professional & Care Provider",
            },
            pricing: {
              title: "Our Plans",
              subtitle: "Pricing & Plans",
              year: "Yearly",
              month: "Monthly",
            },
            showcase: {
              title: "We are here for your care.",
              bigTitle: "Best Care & Better doctor ",
              button: "Make Appointment",
            },
            statistics: {
              title: "We are available 24/7",
              bigTitle: "We Always Ready For A Challenge.",
              button: "Make Appointment",
              satisfied: "satisfied patients",
              awards: "world awards",
            },
          },
        },
      },
      ru: {
        translation: {
          greeting: "Добро пожаловать в React и react-i18next",
          index: {
            aboutus: {
              title: "Краткая история о клинике MediDove.",
              showcase: "О нас",
              author: "Розалина Д. Уильямсон",
              founder: "Основатель",
            },
            departments: {
              title: "Отделения",
              subtitle: "Управляйте своими медицинскими услугами",
            },
            getConsultant: {
              title:
                "Оставайтесь здоровыми и крепкими, чтобы наслаждаться жизнью",
              subtitle:
                "Доверьтесь нам, чтобы помочь всем и снова все наладить.",
              button: "Kонсультация",
            },
            news: {
              title: "Новости",
              subtitle: "Получите каждое обновление здесь.",
              button: "Наш блог",
              calendar: "23 фев 2024",
              comments: "33 Комментария",
            },
            ourteam: {
              title: "Наша команда",
              subtitle: "Профессионалы и носители заботы",
            },
            pricing: {
              title: "Наши планы",
              subtitle: "Цены и планы",
              year: "Год",
              month: "Месяц",
            },
            showcase: {
              title: "Мы здесь для вашей заботы.",
              bigTitle: "Лучшая забота и Лучшие врачи ",
              button: "Запись на прием",
            },
            statistics: {
              title: "Мы доступны 24/7",
              bigTitle: "Мы Всегда Готовы к любым Вызовам",
              button: "Запись на прием",
              satisfied: "довольныx пациентов",
              awards: "мировыx наград",
            },
          },
        },
      },
    },
  });
