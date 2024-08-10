import Button from "../../components/ui/button";

export default function Form() {
  return (
    <main className="mt-[56px] md:mt-[76px] relative text-supportingText min-h-screen w-full px-[16px] mx-auto md:mx-0">
      <div className="w-full h-[1024px] p-16 bg-white flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-[1440px] justify-center items-center inline-flex" />
          <div className="self-stretch h-[58px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black/90 text-2xl font-medium font-['Outfit']">Create New Album</div>
            <div className="self-stretch text-black/90 text-base font-light font-['Outfit']">Please fill in the details below to add a new photo album to the gallery.</div>
          </div>
    <div className="self-stretch h-[968px] p-4 bg-white rounded-3xl shadow flex-col justify-end items-end gap-10 flex">
        <div className="self-stretch rounded-lg border border-[#dbc0ff] justify-start items-start inline-flex">
            <div className="grow shrink basis-0 self-stretch p-6 rounded-2xl border flex-col justify-start items-start gap-6 inline-flex">
                <div className="self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-black/90 text-2xl font-medium font-['Outfit']">Album Details</div>
                    </div>
                    <div className="h-px pl-[9px] pr-[8.50px] justify-center items-center inline-flex">
                        <div className="w-[574px] h-px bg-[#dbc0ff]" />
                    </div>
                </div>
                <div className="self-stretch grow shrink basis-0 px-2 flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Album Title</div>
                        <input className="form-input"></input>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Event Date</div>
                        <input className="form-input"></input>
                    </div>
                    <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Album Description</div>
                        <input className="w-full h-full px-2 py-4 rounded border border-black/20 justify-start items-center gap-2 inline-flex text-black/50 text-base font-light font-['Outfit']"></input>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Facebook Album Link</div>
                        <input className="form-input"></input>
                    </div>
                </div>
            </div>
            <div className="w-px self-stretch bg-[#dbc0ff]" />
            <div className="grow shrink basis-0 h-[852px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-[235px] p-6 rounded-2xl border flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black/90 text-2xl font-medium font-['Outfit']">Photographers</div>
                        </div>
                        <div className="h-px pl-[9px] pr-[8.50px] justify-center items-center inline-flex">
                            <div className="w-[574px] h-px bg-[#dbc0ff]" />
                        </div>
                    </div>
                    <div className="self-stretch h-32 px-2 flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch justify-start items-end gap-4 inline-flex">
                            <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Contributors</div>
                                <input className="form-input"></input>
                            </div>
                            <div className="px-6 py-2.5 bg-white rounded shadow border border-[#f4ebff] justify-center items-center gap-2 flex">
                                <div className="w-6 h-6 relative" />
                                <div className="text-black/90 text-base font-medium font-['Outfit']">Add</div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-2 inline-flex">
                            <div className="px-2 py-1 bg-[#f4ebff] rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-black/90 text-base font-light font-['Outfit']">Photographer One </div>
                                <div className="w-6 h-6 relative" />
                            </div>
                            <div className="px-2 py-1 bg-[#f4ebff] rounded-lg justify-center items-center gap-2 flex">
                                <div className="text-black/90 text-base font-light font-['Outfit']">Photographer Two </div>
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-px bg-[#dbc0ff]" />
                <div className="self-stretch grow shrink basis-0 p-6 rounded-2xl border flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[35px] flex-col justify-start items-start gap-1 flex">
                        <div className="self-stretch px-2 justify-start items-center gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-black/90 text-2xl font-medium font-['Outfit']">Photo Selection</div>
                        </div>
                        <div className="h-px pl-[9px] pr-[8.50px] justify-center items-center inline-flex">
                            <div className="w-[574px] h-px bg-[#dbc0ff]" />
                        </div>
                    </div>
                    <div className="self-stretch grow shrink basis-0 px-2 flex-col justify-start items-start gap-4 flex">
                        <div className="self-stretch grow shrink basis-0 p-px bg-black/10 rounded-sm justify-start items-start gap-px inline-flex">
                            <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-px inline-flex">
                                <div className="self-stretch grow shrink basis-0 px-[121px] py-16 bg-white justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">Image 1</div>
                                </div>
                                <div className="self-stretch grow shrink basis-0 p-2 bg-white justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">Image 2</div>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-px inline-flex">
                                <div className="self-stretch grow shrink basis-0 px-[109px] py-[41px] bg-white justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">Image 3</div>
                                </div>
                                <div className="self-stretch grow shrink basis-0 px-32 py-[33px] bg-white justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">Image 4</div>
                                </div>
                                <div className="self-stretch grow shrink basis-0 px-32 py-8 bg-white justify-center items-center gap-2 inline-flex">
                                    <div className="text-center text-black/50 text-[13px] font-light font-['Outfit']">Image 5</div>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch h-[296px] flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch text-black/90 text-base font-medium font-['Outfit']">Image Links</div>
                            <div className="self-stretch h-[268px] flex-col justify-start items-start gap-3 flex">
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="text-center text-black/90 text-base font-light font-['Outfit']">Image 1</div>
                                    <input className="form-input"></input>
                                </div>
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="text-center text-black/90 text-base font-light font-['Outfit']">Image 2</div>
                                    <input className="form-input"></input>
                                </div>
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="text-center text-black/90 text-base font-light font-['Outfit']">Image 3</div>
                                    <input className="form-input"></input>
                                </div>
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="text-center text-black/90 text-base font-light font-['Outfit']">Image 4</div>
                                    <input className="form-input"></input>
                                </div>
                                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                    <div className="text-center text-black/90 text-base font-light font-['Outfit']">Image 5</div>
                                    <input className="form-input"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="self-stretch justify-end items-center gap-6 inline-flex">
            <div className="px-6 py-3 justify-center items-center gap-2 flex">
                <div className="text-[#7e56d8] text-base font-semibold font-['Outfit']">Discard</div>
            </div>
            <Button>Preview</Button>
        </div>
    </div>
</div>
    </main>
  );
}
