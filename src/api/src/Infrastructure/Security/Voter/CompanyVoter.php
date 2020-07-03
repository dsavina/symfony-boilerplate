<?php

declare(strict_types=1);

namespace App\Infrastructure\Security\Voter;

use App\Domain\Model\Company;
use App\Domain\Model\User;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;

use function assert;

final class CompanyVoter extends Voter
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    /**
     * @param mixed $subject
     */
    protected function supports(string $attribute, $subject): bool
    {
        return $subject instanceof Company;
    }

    /**
     * @param mixed $subject
     */
    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        $user = $token->getUser();
        // If the user is anonymous, do not grant access
        if (! $user instanceof UserInterface) {
            return false;
        }

        assert($user instanceof User);
        assert($subject instanceof Company);

        // Remember: thanks to role hierarchy, an administrator has
        // all roles.
        if (! $this->security->isGranted('ROLE_MERCHANT')) {
            return false;
        }

        return $subject->getUser()->getId() === $user->getId();
    }
}
