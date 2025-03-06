import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import * as yup from "yup";
import { LeftArrowSVG } from "@/assets/svgs";

const contacts = [
  { label: "Contact Us", content: "Email: henbyteq.us@gmail.com" },
  { label: "Working Hours", content: "Mon- Fri. 9:00AM - 5:00PM PST" },
  { label: "Location", content: "New York, United States Of America" },
];

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  companyName: yup.string(),
  message: yup.string().required("Message is required"),
});

export const GetInTouch = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      companyName: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section id="contact-us">
      <div className="px-[4%] bg-[#121212] text-white pb-12">
        <div className="space-y-8">
          <p className="text-[#9C9C9C] font-manrope text-lg">Get In Touch</p>
          <p className="font-cinzel text-2xl sm:max-w-[480px] sm:leading-12">
            Connect for Excellence: Your Gateway to Exceptional Solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-end pt-8 gap-2">
          <div className="px-4 py-8 sm:p-12 w-[100%] sm:w-[40%] border border-white/80 flex flex-col justify-center">
            <p className="text-white font-cinzel text-xl py-6">
              Your Vision, Our Mission: Let's <br /> Shape Success Together.
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="w-full">
                <Input
                  type="text"
                  className="border-0 bg-white/10 rounded-sm p-4 min-h-12 text-white placeholder:text-sm sm:placeholder:text-md placeholder:text-white/50"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <span className="m-1 text-xs text-red-600">
                    {formik.errors.name}
                  </span>
                )}
              </div>

              <div className="w-full">
                <Input
                  type="text"
                  className="border-0 bg-white/10 rounded-sm p-4 min-h-12 text-white placeholder:text-sm sm:placeholder:text-md placeholder:text-white/50"
                  placeholder="Company Name"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                />
                {formik.errors.companyName && formik.touched.companyName && (
                  <span className="m-1 text-xs text-red-600">
                    {formik.errors.companyName}
                  </span>
                )}
              </div>

              <div className="w-full">
                <Input
                  type="text"
                  className="border-0 bg-white/10 rounded-sm p-4 min-h-12 text-white placeholder:text-sm sm:placeholder:text-md placeholder:text-white/50"
                  placeholder="Email Address"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <span className="m-1 text-xs text-red-600">
                    {formik.errors.email}
                  </span>
                )}
              </div>

              <div className="w-full">
                <Textarea
                  className="border-0 bg-white/10 rounded-sm p-4 min-h-36 text-white placeholder:text-sm sm:placeholder:text-md placeholder:text-white/50 resize-none"
                  placeholder="Describe Your Requirement"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
                {formik.errors.message && formik.touched.message && (
                  <span className="m-1 text-xs text-red-600">
                    {formik.errors.message}
                  </span>
                )}
              </div>

              <Button
                type="submit"
                className="mt-2 w-36 h-14 bg-white text-black hover:bg-white/80 hover:cursor-pointer"
              >
                Submit <LeftArrowSVG className="w-12 h-12" />
              </Button>
            </form>
          </div>

          <div className="px-0 sm:px-12 py-4 sm:w-[50%] flex flex-col justify-center space-y-8">
            {contacts.map((contact, index) => (
              <div key={index} className="space-y-2">
                <p className="text-xl text-[#9C9C9C]">{contact.label}</p>
                <p className="font-cinzel text-lg">
                  {contact.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
