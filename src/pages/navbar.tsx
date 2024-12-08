/** @jsx createElement */
// @ts-expect-error
import { type FC, createElement } from "hono/jsx";
import { Script } from "./utils/script";
import type { ProfileViewDetailed } from "@atproto/api/dist/client/types/app/bsky/actor/defs";

export const Navbar: FC<{
  tab?: "home";
  profile?: ProfileViewDetailed | null;
}> = ({ tab, profile }) => {
  return (
    <nav class="bg-slate-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded="false"
              id="mobile-menu-button"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              {/*
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          */}
              <svg
                class="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          */}
              <svg
                class="hidden size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center">
              <svg
                class="h-12 w-12 rounded-md bg-yellow-300 text-slate-900"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1224 1002"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="matrix(.1 0 0 -.1 0 1002)">
                  <path d="m8431 9805c-96-27-166-87-215-182-33-66-52-79-121-86-73-8-239-63-350-117-198-95-392-259-536-451-67-89-88-109-104-106-11 3-85 28-165 55-244 85-446 114-785 113-320-1-500-32-865-151-52-17-104-28-115-26-11 3-63 58-115 123-220 273-382 397-650 496-52 19-138 44-190 56-162 37-173 42-180 76-24 115-133 195-276 203-101 5-161-12-243-73-47-35-66-57-93-112-31-63-33-74-33-168 0-95 2-103 34-163 80-147 239-220 385-178 80 23 123 53 190 129l57 66 130-45c250-86 385-170 576-358 116-115 143-155 130-190-3-7-83-72-179-144-197-148-274-214-359-310-144-161-325-478-393-692-35-107-58-225-76-385-7-70-40-607-40-673 0-7-57 34-127 91-350 284-619 461-948 622-209 102-326 146-520 195-217 55-357 73-570 73-338 0-664-65-877-175-239-122-445-320-547-524-154-308-143-756 26-1053 179-313 525-573 953-715 74-24 164-50 200-57s69-16 73-19c4-4-66-84-157-179-272-281-355-433-387-708-11-93-5-321 12-408 18-94 89-225 183-335 156-183 427-319 698-351 112-13 410-7 558 11 273 34 808 232 1041 386 37 24 73 44 82 44 18 0 27-49 27-156 0-290 63-608 196-994 197-574 463-946 919-1285 267-199 572-356 805-415 177-44 154-29 211-142 46-92 160-289 220-380l24-38h185 185l75 127c41 70 102 181 135 247l60 119 145 39c438 119 772 310 1085 623 395 393 638 838 784 1438 60 242 71 326 79 578 5 154 12 233 20 241 9 9 35-3 114-52 218-134 434-235 673-313 265-86 441-107 743-88 189 12 284 28 407 68 284 92 484 268 610 536 23 50 49 117 56 147 19 82 17 348-4 434-37 149-129 331-234 463-72 91-223 241-283 283-58 39-86 67-78 75 3 3 74 23 159 44 386 99 674 254 900 487 151 156 213 255 274 437 47 140 66 259 66 407 1 287-95 511-311 730-119 121-209 185-366 263-252 126-511 176-844 164-258-10-469-50-745-143-372-124-604-240-902-452-90-64-489-369-535-410-17-14-18 5-17 384 1 262-3 428-10 484-18 124-61 244-155 426-191 373-412 636-706 839-58 40-116 85-129 99l-24 25 31 38c42 53 202 206 294 281 82 67 112 82 328 167 191 75 180 74 213 21 15-24 46-60 67-80 63-56 102-69 210-70 129-1 188 20 256 89 71 73 99 150 99 270 0 82-3 97-33 157-74 152-235 226-391 183zm-4671-221c69-42 76-119 14-173-39-35-53-37-92-17-93 48-86 148 13 192 38 17 32 17 65-2zm4797-21c48-22 71-70 53-112-15-36-61-78-95-87-32-8-89 28-105 66-25 60 31 145 98 149 8 1 30-6 49-16zm-2221-784c60-5 165-21 234-35 154-31 431-101 442-112 5-5-7-42-27-83-44-91-46-135-7-171 37-35 65-48 102-48 45 0 74 24 119 95 22 35 44 66 49 69 10 6 140-84 242-169 86-72 235-223 228-231-3-2-45 7-94 22-82 25-103 27-264 28-163 0-181-2-264-27-194-60-388-188-512-336-72-86-152-234-183-337-28-94-34-99-116-85-73 13-240 17-277 6-12-3-40-13-61-22-25-11-41-13-48-6-5 5-27 59-48 121-125 363-420 628-764 688-116 21-305 14-432-15-49-11-99-21-109-21-18 0-18 2 5 26 51 55 215 186 344 273l134 91 32-60c64-120 134-143 211-71 49 45 51 67 18 174-12 37-18 71-15 76 22 36 420 122 760 164 64 8 196 7 301-4zm-1236-893c191-55 372-221 483-442 51-101 69-181 69-299 0-299-177-562-479-714-92-46-162-61-283-61-130 0-195 16-312 76-162 84-258 175-325 307-60 121-75 198-77 397-1 158 1 181 21 234 93 247 346 466 593 515 30 6 64 13 75 15 38 9 158-6 235-28zm2391 4c68-13 184-68 264-124 192-138 308-332 337-566 37-305-133-621-406-755-131-65-195-78-341-73-104 4-132 9-207 37-317 118-528 414-528 741 0 123 25 225 87 350 83 170 253 312 439 366 107 31 263 41 355 24zm-5691-661c422-38 864-211 1335-524 376-249 634-483 898-811 101-126 242-316 271-364l16-28-81-109c-45-59-85-110-91-112-5-1-138 127-296 286-284 285-549 525-616 557-40 19-87 21-104 4-30-30 2-118 83-228 27-36 138-153 248-260 184-180 293-297 284-306-3-4-247 111-647 303-234 112-665 338-865 453-479 275-754 475-872 636-26 35-56 67-67 70-25 8-56-28-56-66 0-67 117-324 176-387 19-20 34-37 34-39s-14-4-31-4c-37 0-65-14-79-40-24-45 27-82 172-124 177-52 279-96 637-275 508-255 1102-529 1416-654 327-130 381-159 405-217 21-50 11-53-139-46-216 11-563 41-861 76-116 13-482 46-665 60-783 59-1432 324-1701 695-57 78-131 241-155 340-26 105-31 283-10 380 65 301 297 538 651 663 201 70 448 95 710 71zm9102-15c411-57 783-329 892-655 85-254 32-536-145-766-53-68-173-188-241-241-68-52-325-182-483-245-324-127-578-176-1090-207-191-12-452-36-535-50-95-16-535-68-760-90-239-24-258-22-286 31-15 30-15 33 1 45s85 42 491 213c246 103 484 212 864 396 168 81 379 183 470 227 368 179 507 239 680 296 69 23 140 51 157 62 36 22 54 67 32 81s-101 11-155-6c-27-8-52-15-56-15s23 38 61 85c113 141 176 293 144 349-8 14-18 10-74-33-35-27-97-79-138-116-101-92-245-205-327-258-174-111-1051-555-1687-854-160-75-227-97-227-73 0 17 101 121 380 387 237 227 290 288 290 339 0 35-40 75-75 76-55 2-104-33-269-185-316-293-623-622-664-709-9-21-20-38-24-38-28-1-198 198-198 231 0 21 139 216 315 444 170 221 366 409 640 616 317 239 712 445 1085 567 130 42 207 62 415 105 55 12 413 6 517-9zm-4689-109c139-24 139-24 152-133 9-84 52-220 100-317 118-238 415-467 690-531 94-22 285-22 390 1 206 44 345 117 505 264 30 28 59 51 64 51 13 0-1-81-29-168-39-117-155-346-226-447-79-111-324-359-441-446-504-374-1208-493-1884-319-547 141-1038 518-1278 980-70 136-169 420-152 438 3 3 42-30 86-72 169-162 399-272 639-308 91-13 154-3 322 53 222 74 302 121 442 262 162 164 271 360 307 552 18 95 28 114 69 125 115 33 135 34 244 15zm-1617-1839c121-96 316-223 435-284 217-111 527-216 754-257 474-84 1180 66 1600 340 44 28 135 95 202 148 66 53 123 97 126 97 7 0 159-235 209-325 83-147 190-368 181-374-5-3-30-21-57-39-26-19-50-31-53-28s-18 49-32 103c-14 53-30 97-36 97-13 1-73-121-125-254-52-131-96-204-173-286-85-92-166-149-297-213l-115-55-190-4c-112-3-214 0-248 7-123 23-358 149-397 213-11 18-20 48-20 66 0 34 29 72 56 72 24 0 126-27 259-69 224-71 305-73 499-11 78 25 109 42 169 89 119 94 247 280 283 407 21 76 8 113-44 128-85 24-159-39-216-186-44-113-79-159-149-191-154-72-379-72-597 0-136 45-230 53-285 25-42-21-142-120-164-161-14-26-8-123 14-217 7-29 10-56 7-59-9-9-93-5-113 5-24 13-24 37-2 62 22 24 29 128 13 187-15 55-98 146-158 173-54 24-159 26-262 3-204-44-237-48-415-49-169-1-183 0-227 22-58 28-95 70-144 159-67 124-116 193-171 244-60 54-92 73-138 83-80 16-72-28 45-262 134-266 248-396 396-451 158-60 429-46 681 34 119 38 166 42 192 16 56-56-2-136-179-245-131-81-179-91-440-91l-225 1-75 33c-123 55-208 109-287 185-118 111-183 220-261 431-22 61-46 123-53 138-28 62-52 17-64-124-10-104-14-109-61-67-30 26-109 88-132 104-8 5 212 426 266 510 59 90 127 174 142 174 4 0 39-24 76-54zm5632-457c95-13 145-30 248-80 254-127 505-411 544-618 13-70 13-258-1-341-37-229-260-436-547-509-300-76-636-47-1028 89-205 71-601 299-727 419-64 61-81 97-122 254-18 73-47 166-64 207-16 41-27 78-25 82 9 14 47 9 170-23 120-30 407-117 542-163 44-15 101-45 140-75 37-27 91-60 119-75 108-54 213-86 213-65 0 6-30 43-67 81l-68 70 55-7c30-4 127-20 215-36 344-63 383-69 470-75 63-4 101-2 128 8 42 14 74 56 64 82-15 39-203 96-632 191-137 30-367 87-510 125-143 39-395 105-559 146-165 42-313 82-328 90-33 17-57 59-42 74 10 10 164 34 284 45 135 12 523 56 615 70 50 8 160 21 245 29 85 9 173 18 195 20 65 7 391-4 473-15zm-7728-9c172-19 582-61 845-85 382-35 452-45 478-65 18-15 20-21 10-43-20-43-102-73-260-97-159-23-352-69-583-136-371-110-486-135-705-159-244-26-346-44-381-66-35-21-84-107-84-145 0-13 8-30 17-40 20-20 66-17 333 22 473 68 695 113 1170 238 310 81 390 100 396 93 7-7-115-507-127-523-16-20-203-150-293-203-299-177-534-269-856-337-124-27-151-29-330-28-175 1-205 4-291 26-310 83-516 241-579 445-43 141-35 350 22 520 105 317 361 521 723 577 106 17 375 20 495 6zm5890-1188c30-167 30-498-1-565-20-44-246-190-457-296-112-56-278-123-382-155-113-34-453-108-670-145-357-62-388-65-660-64-371 1-610 25-978 99-218 43-604 142-742 189-125 42-476 215-575 283-64 43-70 51-78 92-4 25-7 170-5 322 3 243 5 279 20 294s28 10 190-74c362-188 581-256 1333-413l240-51 490 5c541 5 605 10 915 73 246 50 611 144 770 199 172 59 371 155 480 232 54 38 87 56 92 49 3-6 11-39 18-74zm-3944-1922c191-70 596-168 964-234 377-67 1030-57 1565 25 421 64 655 120 869 206 60 24 111 41 114 38 13-12-140-206-262-333-81-84-222-206-321-277-190-136-366-222-687-335l-203-72-365 5c-406 5-384 2-607 83-252 93-528 249-743 421-122 97-337 314-409 411-52 72-73 112-57 112 2 0 66-23 142-50zm1807-1247c-14-41-94-200-111-222l-19-23-66 125c-37 69-67 128-67 131 0 4 61 6 135 6 124 0 134-1 128-17z" />
                  <path d="m5789 8419c-21-40 9-160 53-206 30-32 71-30 86 2 25 55 5 134-48 187-42 43-74 48-91 17z" />
                  <path d="m6061 8401c-59-59-24-211 49-211 32 0 76 44 86 86 10 38-2 103-22 125-23 26-87 26-113 0z" />
                  <path d="m6319 8381c-45-45-49-73-16-122 29-44 66-64 100-55 92 23 100 159 12 200-46 22-52 21-96-23z" />
                  <path d="m4840 7571c-85-26-175-103-216-184-78-153-40-331 104-479 36-37 88-79 115-93 96-48 240-27 354 51 86 59 137 151 153 281 17 130-1 189-90 286-58 64-110 97-198 126-63 21-171 27-222 12zm105-154c54-46 38-152-31-206-42-33-80-27-125 18-44 43-51 88-24 140 34 66 130 92 180 48z" />
                  <path d="m4515 6826c-76-33-94-111-39-166 38-39 107-60 152-48 83 22 98 174 21 213-35 18-94 19-134 1z" />
                  <path d="m7194 7566c-136-34-227-133-268-293-44-169 14-338 147-430 122-83 268-82 394 3 57 39 123 119 149 179 22 54 29 171 14 236-30 127-118 252-205 290-56 25-166 32-231 15zm63-126c39-23 51-73 33-133-15-50-69-107-102-107-52 0-98 59-98 128 0 43 35 87 92 115 41 20 37 21 75-3z" />
                  <path d="m7614 6830c-29-12-64-63-71-104-11-68 56-134 125-121 123 23 176 104 115 176-43 51-114 72-169 49z" />
                  <path d="m5734 6310c-50-20-101-125-90-184 15-78 157-196 300-248 215-79 437-30 589 131 78 83 96 125 72 174-25 52-67 88-113 94-38 5-43 2-107-57-95-88-156-114-270-115-125 0-186 28-244 113-38 56-88 103-108 101-4 0-18-4-29-9z" />
                  <path d="m7630 5673-65-68 68 65c62 60 72 70 64 70-1 0-32-30-67-67z" />
                </g>
              </svg>
            </div>
            <div class="hidden items-center space-x-4 sm:ml-6 sm:flex">
              <a
                href="/"
                class={
                  "rounded-md px-3 py-2 text-sm font-medium" +
                  (tab === "home"
                    ? " bg-gray-900 text-white"
                    : " text-gray-300 hover:bg-gray-700 hover:text-white")
                }
                aria-current="page"
              >
                Home
              </a>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {Boolean(profile) && <div id="mount-search-box" />}
            {/* Profile dropdown */}
            {!profile && (
              <a
                href="/login"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Buzz in
              </a>
            )}
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  {profile?.avatar ? (
                    <img
                      class="size-8 rounded-full"
                      src={profile.avatar}
                      alt=""
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="10" r="3" />
                      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                    </svg>
                  )}
                </button>
              </div>

              <Script
                script={(document) => {
                  const btn = document.getElementById("user-menu-button")!;
                  const menu = document.getElementById("user-menu")!;

                  // close the dropdown when clicking outside of it
                  document.addEventListener("click", (e) => {
                    if (e.target !== btn) {
                      if (btn.getAttribute("aria-expanded") === "true") {
                        btn.setAttribute("aria-expanded", "false");
                        menu.style.display = "none";
                      }
                    }
                  });

                  btn.addEventListener("click", (e) => {
                    // prevent the click event from bubbling up to the document
                    e.stopPropagation();

                    const shouldExpand =
                      btn.getAttribute("aria-expanded") !== "true";

                    btn.setAttribute("aria-expanded", String(shouldExpand));
                    menu.style.display = shouldExpand ? "block" : "none";
                  });
                }}
              />

              <div
                id="user-menu"
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex={-1}
                style="display: none;"
              >
                {/* Active: "bg-gray-100 outline-hidden", Not Active: "" */}
                <a
                  href="/profile"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex={-1}
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <form action="/refresh-books" method="get">
                  <button
                    class="block px-4 py-2 text-sm text-gray-700"
                    type="submit"
                    role="menuitem"
                    tabindex={-1}
                    id="user-menu-item-1"
                  >
                    Refresh all data
                  </button>
                </form>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex={-1}
                  id="user-menu-item-2"
                >
                  Settings
                </a>
                <form action="/logout" method="post">
                  <button
                    type="submit"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex={-1}
                    id="user-menu-item-3"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="/"
            class={
              "block rounded-md px-3 py-2 text-base font-medium" +
              (tab === "home"
                ? " bg-gray-900 text-white"
                : " text-gray-300 hover:bg-gray-700 hover:text-white")
            }
            aria-current="page"
          >
            Home
          </a>
        </div>
      </div>
      <Script
        script={(document) => {
          const btn = document.getElementById("mobile-menu-button")!;
          const menu = document.getElementById("mobile-menu")!;

          // Default to closed
          menu.style.display = "none";

          btn.addEventListener("click", () => {
            const shouldExpand = btn.getAttribute("aria-expanded") !== "true";
            btn.setAttribute("aria-expanded", String(shouldExpand));
            menu.style.display = shouldExpand ? "block" : "none";
          });
        }}
      ></Script>
    </nav>
  );
};
