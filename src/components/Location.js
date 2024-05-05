const Location = () => {
  return (
    <div className="text-center mt-[70px]  border-[10px] border-black md:p-[50px]">
      <h2 className="text-[20px] font-[700]">Location</h2>
      <h2 className="text-[20px] font-[700]">17 Kutateladze st</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.877944122049!2d44.741170611888656!3d41.72315257113935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044731094d09d5f%3A0x233704685e46ba98!2sKalistrate%20Kutateladze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1714921255995!5m2!1sen!2sge"
        // width="600"
        // height="450"
        style={{
          border: "0",
          width: "80%",
          height: "400px",
          margin: "auto",
          marginTop: "70px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
