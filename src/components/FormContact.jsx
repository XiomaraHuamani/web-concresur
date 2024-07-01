import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import CheckBoxCustom from './CheckBoxCustom';

const FormContact = ({ setFormSuccess }) => {
  const NumberRegExp = /^\d+$/;

  /* Función para permitir solo números */
  function onlyNumbers(e) {
    if (!NumberRegExp.test(e.key)) return e.preventDefault();
    else return true;
  }

  return (
    <div className="px-[31px] md:px-[98px] lg:px-[56px] xl:px-[98px] shadow-inner h-full rounded-[10px] bg-primary py-10 shrink-0 mb-10 lg:my-8 form-container">
      <Formik
        initialValues={{
          email: '',
          name: '',
          phone: '',
          message: '',
          termsAndConditions: false,
          privacyPolicies: false,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Nombre es requerido*';
          }
          if (!values.email) {
            errors.email = 'Correo electrónico requerido*';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Correo electrónico inválido*';
          }
          if (!values.phone) {
            errors.phone = 'Teléfono es requerido*';
          }
          if (!values.termsAndConditions) {
            errors.termsAndConditions = 'Debes aceptar los términos y condiciones';
          }
          if (!values.privacyPolicies) {
            errors.privacyPolicies = 'Debes aceptar las políticas de privacidad';
          }
          if (!values.termsAndConditions && !values.privacyPolicies) {
            errors.checkbox = 'Debes aceptar los términos y condiciones y políticas de privacidad';
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          // Simulación de envío de formulario (aquí puedes manejar la lógica del envío real)
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            setFormSuccess(true); // Marca el formulario como enviado exitosamente
          }, 1000); // Tiempo de simulación

          // Aquí normalmente enviarías los datos usando axios o GraphQL, pero como es estático, solo simularé éxito
        }}
      >
        {({ isSubmitting, errors, touched, handleChange, values }) => (
          <Form id="form-data-contact" className="text-primary-200 flex flex-col">
            <div className={`${errors.name && touched.name ? 'h-auto' : 'h-[70px]'} mb-1`}>
              {/* <p className='self-stretch text-[18px] font-bold text-secondary pb-4 leading-[100%]'>Datos personales</p> */}
              <Field
                className={`block w-full md:w-[90%] rounded-[4px] h-12 px-8 py-4 placeholder:text-secondary font-medium bg-primary border leading-[100%] tracking-[0.5px]`}
                type="text"
                name="name"
                placeholder="Nombres y Apellidos*"
              />
              <ErrorMessage name="name" component="div" className="text-[12px] pb-1 pl-1 text-greenGemma" />
            </div>
            <div className={`${errors.email && touched.email ? 'h-auto' : 'h-[70px]'} mb-1`}>
              {/* <p className='self-stretch text-[18px] font-bold text-secondary pb-4 leading-[100%]'>Datos de contacto</p> */}
              <Field
                className={`block w-full md:w-[90%] rounded-[4px] h-12 px-8 py-4 placeholder:text-secondary font-medium bg-primary border leading-[100%] tracking-[0.5px]`}
                type="email"
                name="email"
                placeholder="Correo electrónico*"
              />
              <ErrorMessage name="email" component="div" className="text-[12px] pb-1 pl-1 text-greenGemma" />
            </div>
            <div className={`${errors.phone && touched.phone ? 'h-auto' : 'h-[70px]'} mb-1`}>
              <Field
                className={`block w-full md:w-[90%] rounded-[4px] h-12 px-8 py-4 placeholder:text-secondary font-medium bg-primary border leading-[100%] tracking-[0.5px]`}
                type="text"
                name="phone"
                onKeyPress={(e) => onlyNumbers(e)}
                maxLength="9"
                placeholder="Teléfono*"
              />
              <ErrorMessage name="phone" component="div" className="text-[12px] pb-1 pl-1 text-greenGemma" />
            </div>
            <div className={`mb-1`}>
              {/* <p className='self-stretch text-[18px] font-bold text-secondary pb-4 leading-[100%]'>Detalles o comentarios</p> */}
              <Field
                className={`block w-full md:w-[90%] rounded-[4px] h-12 px-8 py-4 placeholder:text-secondary font-medium bg-primary border leading-[100%] tracking-[0.5px]`}
                type="text"
                name="message"
                placeholder="Mensaje"
              />
            </div>
            <div className="mb-8">
              {/* <p className="text-[10px] mt-4 font-semibold text-secondary">(*) Campos obligatorios</p> */}
              <div className="mt-4">
                <CheckBoxCustom
                  name={'termsAndConditions'}
                  isChecked={values.termsAndConditions}
                  handleChecked={handleChange}
                  // label={<p className='text-[10px] relative top-[2px] leading-[140%] font-normal text-secondary'>He leído y acepto los Términos y condiciones</p>}
                />
                <CheckBoxCustom
                  className=''
                  name={'privacyPolicies'}
                  handleChecked={handleChange}
                  isChecked={values.privacyPolicies}
                  label={<p className='text-[10px] relative top-[3px] leading-[140%] font-normal text-secondary '>Acepto Política de Privacidad</p>}
                />
                <ErrorMessage name="termsAndConditions" component="div" className="text-[12px] pb-1 pl-1 text-greenGemma" />
                <ErrorMessage name="privacyPolicies" component="div" className="text-[12px] pb-1 pl-1 text-greenGemma" />
                <ErrorMessage name="checkbox" component="div" className="text-[12px] pb-1 pl-1 text-greenGemma" />
              </div>
            </div>
            <div className='flex justify-center md:justify-start'>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${isSubmitting ? 'bg-secondary' : 'bg-secondary text-primary text-[16px] leading-[100%] tracking-[0.5px]'} rounded-[10px] w-min`}
              >
                {isSubmitting ? (
                  <div className="w-full flex justify-center py-[6px] px-[62px]">
                    <div className="spinner"></div>
                  </div>
                ) : (
                  <p className="py-4 px-14 font-medium">Enviar</p>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContact;
