import React from 'react'
import { withNamespaces } from 'react-i18next';
import QuestItem from '../../styles/quest/Quest__item';
import QuestItemTitle from  '../../styles/quest/Quest__item-title'

const ListOfQuest = ({ t }) => {
  return (
    <React.Fragment>
      <h1>
        {t('Preguntas')}
      </h1>
      <ol>
        <QuestItem>
          <QuestItemTitle>{t('¿Qué es la accesibilidad? ¿Cómo lo logras?')}
          </QuestItemTitle>
          <p>
            {t("Tiene como objetivo que los sitios web sean utilizables por el máximo número de personas. Uso algo de UI y UX, y aplico 'reconocer es más facil que recordar'")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('¿Cuál es la diferencia entre session storage, local storage y cookies?')}
          </QuestItemTitle>
          <p>
            <strong>Session Storage: </strong>
            {t("La información es almacenada hasta que se cierra el sitio web")} <br />
            <strong>Local Storage: </strong>
            {t("La información dura hasta que limpies tu caché")} <br />
            <strong>Cookies: </strong>
            {t("Almacenan poca información y duran el tiempo programado al crearlas")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('Explica en que consiste el event loop de javascript, y tambien explica como es que funciona las promesas y el async await')}
          </QuestItemTitle>
          <p>
            <strong>Event loop: </strong>
            {t("Gestiona una lista de tareas ejecutándose y una lista de tareas en cola")} <br />
            {t("Con las promesas no sabemos cuándo se van a resolver y con async await forzamos una espera en la función")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('Si estas teniendo muchas llamadas API que vienen desde tus hooks, ¿que puedes hacer para prevenirlas?')}
          </QuestItemTitle>
          <p>
            {t("En mi opinión, lo correcto será que la API traiga toda la información que necesitamos, en lugar de tener muchos servicios")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('¿Cómo manejas el estado global?, y ¿por qué de esa manera?')}
          </QuestItemTitle>
          <p>
            {t("Uso useContext para una aplicación pequeña que solo necesita pasar información entre componentes sin mucha lógica, y Redux para proyectos con más complejidad de gestión de datos")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('¿Qué es el renderizado progresivo?')}
          </QuestItemTitle>
          <p>
            {t("Nombre de  técnicas utilizadas para mejorar el rendimiento de una página web. Ejm: Lazyload")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('¿Qué tipo de métricas revisas para evaluar la calidad y cuidar de tu aplicación de frontend?')}
          </QuestItemTitle>
          <p>
            {t('Uso NewRelic, Hotjar, Google Analytics, Heatmap and ultimamente estoy aprendiendo Sentry')}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('¿Cómo se toma la decisión de renovar/reconstruir una aplicación?')}
          </QuestItemTitle>
          <p>
            {t("Depende, por ejemplo si para la aplicación es mejor usar teconología más actual para la compatibilidad con navegadores o quizá su utilización como microfrontend en otro proyecto")}
          </p>
        </QuestItem>
        <QuestItem>
          <QuestItemTitle>
            {t('¿Qué estándares crees que es importante compartir en las aplicaciones frontend?')}
          </QuestItemTitle>
          <p>
            {t('Por ejemplo: la arquitectura de carpetas, Metodologías para las hojas de estilo, y above the fold')}
          </p>
        </QuestItem>
      </ol>
    </React.Fragment>
  )
}

export default withNamespaces()(ListOfQuest);
