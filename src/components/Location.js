const Location = () => {
  return (
    <>
      <div className="text-center md:mt-[70px]">
        <h2 className="text-[20px] font-[700]">Location</h2>
        <h2 className="text-[20px] font-[700]">118 Akaki Tsereteli Ave</h2>
      </div>
      <div className="text-center   border-[10px] border-black relative md:w-[70%] m-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.577695295191!2d44.77936051188903!3d41.7296307711386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472c489b54677%3A0xf07d9c00fcc0ea4a!2s118%20Akaki%20Tsereteli%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1715185136884!5m2!1sen!2sge"
          style={{
            border: "0",
            width: "100%",
            height: "400px",
            margin: "auto",
          }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Location;
