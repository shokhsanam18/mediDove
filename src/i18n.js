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
          navbar: {
            home: "Home",
            about: "About",
            aboutChildren: {
              tasis: "Constitutors",
              ustav: "Ustav",
              doctors: "Doctors",
            },
            surgery: "Surgery types",
            itemsChildren: {
              surgery: "Surgery",
              details: "Details",
            },
            news: "News",
            member: "Become a member",
            blog: "Blog",
            contact: "Contact Us",
          },
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
          about: {
            main: {
              title: " We are here for your care.",
              showcase: "About Us",
              button1: "Home",
              button2: "About Us",
              subtitle: "Short Story About MediDove Clinic.",
              mission: "Our Mission",
              vision: "Our vision",
            },
            tasischilar: {
              title: "Constitutors",
              approach: "Our Approach",
              patient: "If you are a patient",
              quality: "seeking quality",
            },
            ustav: {
              ustav: "Ustav",
            },
            shifokorlar: {
              title: " We are here for your care.",
              showcase: "Doctors",
              team: "Our Team",
              proffesional: " A Professional &",
              care: "Care Provider",
              appointment: "Make appointment",
            },
          },
          app: {
            appointment: "Appointment",
            blog: "Blog",
            call: "Make Call",
          },

          surgery: {
            main: {
              title: " We are here for your care.",
              showcase: "Our Services",
              button1: "Home",
              button2: "Our Services",
            },
            healthcare: {
              title: "Health care facility",
              question:
                "Would you rather stay at home than go into a health care facility?",
            },
            employers: {
              title: "For Employers",

              contact_button: "CONTACT US",
              apply_button: "APPLY TODAY",
            },
          },
          details: {
            main: {
              title: " We are here for your care.",
              showcase: "Details",
              button1: "Home",
              button2: "Details",
            },
          },
          news: {
            main: {
              title: " We are here for your care.",
              showcase: "News",
              button1: "Home",
              button2: "News",
            },
            card: {
              description:
                "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
              footer: "read more ->",
            },

            NPR: {
              title:
                "This health blog from NPR takes a fairly broad look at the medical world,.",
            },
          },
          blog: {
            main: {
              title: " We are here for your care.",
              showcase: "Blog 3 coloum",
              button1: "Home",
              button2: "Blog",
            },
            card: {
              description:
                "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the health topics that consistently affect a wide range of people. They also get kudos.",
              footer: "read more ->",
              comment: "comments",
            },
          },
          contactus: {
            main: {
              title: " We are here for your care.",
              showcase: "Contact Us",
              button1: "Home",
              button2: "Contact",
            },
          },
        },
      },
      ru: {
        translation: {
          greeting: "Добро пожаловать в React и react-i18next",
          navbar: {
            home: "Главная",
            about: "О нас",
            aboutChildren: {
              tasis: "Учредители",
              ustav: "Устав",
              doctors: "Врачи",
            },
            surgery: "Операции",
            itemsChildren: {
              surgery: " Виды Операций",
              details: "Детали",
            },
            news: "Новости",
            member: "Присоединиться",
            blog: "Блог",
            contact: "Связь с нами",
          },
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
          about: {
            main: {
              title: "Мы здесь для вашей заботы.",
              showcase: "O нас",
              button1: "Главная",
              button2: "O нас",
              subtitle: "Краткая история о клинике MediDove.",
              mission: "Наша Миссия",
              vision: "Наш Взгляд",
            },
            tasischilar: {
              title: "Учредители",
              approach: "Наш Подход",
              patient: "Если вы пациент,",
              quality: "Который ищет качество",
            },
            ustav: {
              ustav: "Устав",
            },
            shifokorlar: {
              title: "Мы здесь для вашей заботы",
              showcase: "Врачи",
              team: "Наша Команда",
              proffesional: " Профессионалы &",
              care: "Носители заботы",
              appointment: "Запись на приём",
            },
          },
          app: {
            appointment: "Приём",
            blog: "Блог",
            call: "Позвонить",
          },
          surgery: {
            main: {
              title: "Мы заботимся о вас",
              showcase: "Наши сервисы",
              button1: "Главная",
              button2: "Наши сервисы",
            },
            healthcare: {
              title: "Медицинское учреждение",
              question:
                "Вы хотите остаться дома вмесо того, чтобы остаться дома?",
            },

            employers: {
              title: "Для работодателей",
              description:
                "Lorem ipsum here is in russian. But firstly let us know more about you and we will translate it",
              contact_button: "Связь с нами",
              apply_button: "Оставь заявку",
            },
          },
          details: {
            main: {
              title: "Мы заботимся о вас",
              showcase: "Подробнее",
              button1: "Главная",
              button2: "Подробнее",
            },
          },
          news: {
            main: {
              title: " Мы заботимся о вас",
              showcase: "Новости",
              button1: "Главная",
              button2: "Новости",
            },
            card: {
              description:
                "Есть большая вероятность, что мы — блог с наиболее подходящим названием в этом списке, поскольку он фокусируется на темах здравоохранения, которые постоянно затрагивают широкий круг людей. Они также получают похвалу.",
              footer: "Читать больше ->",
            },
            NPR: {
              title:
                "Этот блог о здоровье от NPR дает довольно широкий взгляд на мир медицины.",
            },
          },
          blog: {
            main: {
              title: " Мы заботимся о вас",
              showcase: "Блог 3",
              button1: "Главная",
              button2: "Блог",
            },
            card: {
              description:
                "Есть большая вероятность, что мы — блог с наиболее подходящим названием в этом списке, поскольку он фокусируется на темах здравоохранения, которые постоянно затрагивают широкий круг людей. Они также получают похвалу.",
            },
          },
          contactus: {
            main: {
              title: "Мы заботимся о вас",
              showcase: "Свяжитесь с нами",
              button1: "Главная",
              button2: "Связаться",
            },
          },
        },
      },

      uz: {
        translation: {
          greeting: " React va react-i18next ga xush kelibsiz",
          index: {
            aboutus: {
              title: "MediDove klinikasi haqida qisqa hikoya.",
              showcase: "Biz haqimizda",
              author: "Rosalina D. Williamson",
              founder: "Asoschi",
            },
            departments: {
              title: "Bo‘limlar",
              subtitle: "Sog‘liqni saqlash xizmatlari boshqariladi",
            },
            getConsultant: {
              title: "Hayotdan zavqlanish uchun sog‘lom va kuchli bo‘ling",
              subtitle:
                "Barchasiga yordam berish va ishlarni yana yaxshilash uchun bizga ishoning.",
              button: "Konsultatsiya olish",
            },
            news: {
              title: "Yangiliklar",
              subtitle: "Barcha yangiliklarni shu yerdan oling",
              button: "Bizning  Blog",
              calendar: "23 Feb 2024",
              comments: "33 Fikrlar",
            },
            ourteam: {
              title: "Bizning Jamoa",
              subtitle: "Professional xizmat ko‘rsatuvchi",
            },
            pricing: {
              title: "Bizning rejalar",
              subtitle: "Narx va rejalar",
              year: "Yillik",
              month: "Oylik",
            },
            showcase: {
              title: " Biz sizga g'amxo'rmiz.",
              bigTitle: "Yaxshi g‘amxo‘rlik va yaxshiroq shifokor ",
              button: "Yozilish",
            },
            statistics: {
              title: "Biz 24/7 ishlaymiz.",
              bigTitle: "Biz har doim qiyinchilikka tayyormiz.",
              button: "Yozilish",
              satisfied: "Mamnun mijozlar",
              awards: "Jahon mukofotlari",
            },
          },
          about: {
            main: {
              title: " Biz sizga g'amxo'rmiz.",
              showcase: "Biz haqimizda",
              button1: "Bosh sahida",
              button2: "Biz haqimizda",
              subtitle: "MediDove klinikasi haqida qisqa hikoya.",
              mission: "Bizning Missiya",
              vision: "Bizning qarashlarimiz",
            },
            tasischilar: {
              title: "Tarkibiy qismlar",
              approach: "Bizning yondashuv",
              patient: "Agar siz bemor bo‘lsangiz",
              quality: "sifat izlovchi",
            },
            ustav: {
              ustav: "Ustav",
            },
            shifokorlar: {
              title: "  Biz sizga g'amxo'rmiz.",
              showcase: "Shifokorlar",
              team: "Bizning jamoa",
              proffesional: " Malakali va",
              care: "g'amxo'rlik qiluvchi",
              appointment: "Yozilish",
            },
          },
          app: {
            appointment: "Yozilish",
            blog: "Blog",
            call: "Qo'ng'iroq qilish",
          },
          surgery: {
            main: {
              title: " Biz sizga g'amxo'rmiz.",
              showcase: "Bizning xizmatlar",
              button1: "Bosh sahifa",
              button2: "Bizning xizmatlar",
            },
            healthcare: {
              title: "Sog'liqni saqlash muassasasi",
              question:
                "Siz Shifoxonaga borishdan ko'ra uyda qolishni xohlaysizmi?",
            },

            employers: {
              title: "Ish beruvchilar uchun",
              description:
                "Lorem ipsum o'zbekcha tarjima. Sizning bu yerdagi mazmuningiz o'zbek tiliga tarjima qilinadi.",
              contact_button: "BOG'LANING",
              apply_button: "ARIZA BERING",
            },
          },
          details: {
            main: {
              title: " Biz sizga g'amxo'rmiz.",
              showcase: "Tafsilotlar",
              button1: "Bosh sahifa",
              button2: "Tafsilotlar",
            },
          },
          news: {
            main: {
              title: " Biz sizga g'amxo'rmiz.",
              showcase: "Yangiliklar",
              button1: "Bosh sahifa",
              button2: "Yangiliklar",
            },
            card: {
              description:
                "Ehtimol, 'Everyday Health' ushbu ro‘yxatdagi eng to‘g‘ri nomlangan blog bo‘lishi mumkin, chunki u keng doiradagi odamlarga doimiy ravishda ta’sir qiladigan sog‘liqni saqlash mavzulariga e’tibor qaratadi. Ular shuningdek, o‘z sohasida tan olingan va e’tiborga sazovor hisoblanadi.",
              footer: "Ko'proq o'qing ->",
            },
            NPR: {
              title:
                "NPRning ushbu sog'liqni saqlash blogi tibbiyot olamiga juda keng nazar tashlaydi.",
            },
          },

          blog: {
            main: {
              title: " Biz sizga g'amxo'rmiz.",
              showcase: "Blog 3 ustun",
              button1: "Bosh sahifa",
              button2: "Blog",
            },
            card: {
              description:
                "Ehtimol, 'Everyday Health' ushbu ro‘yxatdagi eng to‘g‘ri nomlangan blog bo‘lishi mumkin, chunki u keng doiradagi odamlarga doimiy ravishda ta’sir qiladigan sog‘liqni saqlash mavzulariga e’tibor qaratadi. Ular shuningdek, o‘z sohasida tan olingan va e’tiborga sazovor hisoblanadi.",
              footer: "Ko'proq o'qing ->",
              comment: "Fikrlar",
            },
          },
          contactus: {
            main: {
              title: " Biz sizga g'amxo'rmiz.",
              showcase: "Bog'lanish",
              button1: "Bosh sahifa",
              button2: "Bog'lanish",
            },
          },
        },
      },
    },
  });
