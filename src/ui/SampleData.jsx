function SampleData() {
  return (
    <div className="mx-3 mt-10 rounded-xl bg-gray-200 px-2 py-3 text-center">
      <h3 className="mb-2 font-semibold text-blue-900 uppercase">
        sample Data
      </h3>
      <button className="mb-2 rounded bg-blue-700 px-12 py-1 text-[12px] font-semibold text-gray-50 capitalize hover:bg-blue-900">
        uplode All
      </button>
      <button className="rounded bg-blue-700 px-3 py-2 text-[12px] font-semibold text-gray-50 capitalize hover:bg-blue-900">
        uplode bookings only
      </button>
    </div>
  );
}

export default SampleData;
