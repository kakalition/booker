import BookerLogo from './BookerLogo';

export default function BookerLogoWithText() {
  return (
    <div className="flex flex-row items-center justify-center gap-8">
      <BookerLogo />
      <p className="font-inter text-3xl font-medium text-gray-700">Booker</p>
    </div>
  );
}
